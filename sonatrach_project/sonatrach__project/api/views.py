# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from accounts.models import Concession, Demande, Phase, Contract, Seismic, Well, GgStudies, Fracturation
# from .serializers import ConcessionSerializer, DemandeSerializer, PhaseSerializer, ContractSerializer, SeismicSerializer, WellSerializer, GgStudiesSerializer, FracturationSerializer
# from django.core.files.base import ContentFile
# import base64

# class ConcessionListView(APIView):
#     def get(self, request):
#         concessions = Concession.objects.all()
#         serializer = ConcessionSerializer(concessions, many=True)
#         return Response(serializer.data)

# class PhaseListView(APIView):
#     def get(self, request):
#         phases = Phase.objects.all()
#         serializer = PhaseSerializer(phases, many=True)
#         return Response(serializer.data)

# class ContractListView(APIView):
#     def get(self, request):
#         contracts = Contract.objects.all()
#         serializer = ContractSerializer(contracts, many=True)
#         return Response(serializer.data)

# class DemandeListView(APIView):
#     def get(self, request):
#         demandes = Demande.objects.all()
#         serializer = DemandeSerializer(demandes, many=True)
#         return Response(serializer.data)

# class DemandeCreateView(APIView):
#     def post(self, request):
#         data = request.data.copy()
        
#         if 'document_dem' in data and data['document_dem']:
#             file_data = data['document_dem']
#             if ';base64,' in file_data:
#                 format, filestr = file_data.split(';base64,')
#                 ext = format.split('/')[-1]
#                 data['document_dem'] = ContentFile(
#                     base64.b64decode(filestr),
#                     name=f"{data.get('dem_filename', 'demand_doc')}.{ext}"
#                 )
        
#         if 'document_resp' in data and data['document_resp']:
#             file_data = data['document_resp']
#             if ';base64,' in file_data:
#                 format, filestr = file_data.split(';base64,')
#                 ext = format.split('/')[-1]
#                 data['document_resp'] = ContentFile(
#                     base64.b64decode(filestr),
#                     name=f"{data.get('resp_filename', 'response_doc')}.{ext}"
#                 )
        
#         serializer = DemandeSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# # programme ---------------#
# class SeismicListView(APIView):
#     def get(self, request):
#         seismics = Seismic.objects.all()
#         serializer = SeismicSerializer(seismics, many=True)
#         return Response(serializer.data)

# class WellListView(APIView):
#     def get(self, request):
#         wells = Well.objects.all()
#         serializer = WellSerializer(wells, many=True)
#         return Response(serializer.data)

# class GgStudiesListView(APIView):
#     def get(self, request):
#         studies = GgStudies.objects.all()
#         serializer = GgStudiesSerializer(studies, many=True)
#         return Response(serializer.data)

# class FracturationListView(APIView):
#     def get(self, request):
#         fracturations = Fracturation.objects.all()
#         serializer = FracturationSerializer(fracturations, many=True)
#         return Response(serializer.data)

# -----------------------------------------------------


from rest_framework.views import APIView
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework import status
from accounts.models import Concession, Demande, Phase, Contract, Seismic, Well, GgStudies, Fracturation, Commitement
from .serializers import (
    ConcessionSerializer, DemandeSerializer, PhaseSerializer, ContractSerializer, 
    SeismicSerializer, WellSerializer, GgStudiesSerializer, FracturationSerializer, CommitementSerializer
)
from django.core.files.base import ContentFile
import base64
from django.db.models import Q

# Custom serializer for engagement details (Step 3 of Perimetres)
class EngagementDetailSerializer(serializers.Serializer):
    label = serializers.CharField()
    contractuel = serializers.FloatField()
    restePhase = serializers.FloatField()
    effectif = serializers.FloatField()
    resteRealiser = serializers.FloatField()

class ConcessionListView(APIView):
    def get(self, request):
        concessions = Concession.objects.all()
        
        # Filtering for PerimeterList page
        search_term = request.query_params.get('search', None)
        dept_asset = request.query_params.get('dept__asset', None)
        status_filter = request.query_params.get('status', None)

        if search_term:
            concessions = concessions.filter(name__icontains=search_term)
        if dept_asset:
            concessions = concessions.filter(dept__asset=dept_asset)
        if status_filter:
            concessions = concessions.filter(status=status_filter)

        serializer = ConcessionSerializer(concessions, many=True)
        return Response(serializer.data)

    def put(self, request, name):
        try:
            concession = Concession.objects.get(name=name)
        except Concession.DoesNotExist:
            return Response({"error": "Concession not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = ConcessionSerializer(concession, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, name):
        try:
            concession = Concession.objects.get(name=name)
            concession.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Concession.DoesNotExist:
            return Response({"error": "Concession not found"}, status=status.HTTP_404_NOT_FOUND)

class PhaseListView(APIView):
    def get(self, request):
        phases = Phase.objects.all()
        
        # Filter by perimeter if provided
        prm_name = request.query_params.get('prm', None)
        if prm_name:
            phases = phases.filter(ctr__prm__name=prm_name)
            
        serializer = PhaseSerializer(phases, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PhaseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        try:
            phase = Phase.objects.get(pk=pk)
        except Phase.DoesNotExist:
            return Response({"error": "Phase not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = PhaseSerializer(phase, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            phase = Phase.objects.get(pk=pk)
            phase.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Phase.DoesNotExist:
            return Response({"error": "Phase not found"}, status=status.HTTP_404_NOT_FOUND)

class ContractListView(APIView):
    def get(self, request):
        contracts = Contract.objects.all()
        
        # Filter by perimeter if provided
        prm_name = request.query_params.get('prm', None)
        if prm_name:
            contracts = contracts.filter(prm__name=prm_name)
            
        serializer = ContractSerializer(contracts, many=True)
        return Response(serializer.data)

class DemandeListView(APIView):
    def get(self, request):
        demandes = Demande.objects.all()
        
        # Filter by perimeter if provided
        prm_name = request.query_params.get('prm', None)
        if prm_name:
            demandes = demandes.filter(ctr__prm__name=prm_name)
            
        serializer = DemandeSerializer(demandes, many=True)
        return Response(serializer.data)

class DemandeCreateView(APIView):
    def post(self, request):
        data = request.data.copy()
        
        if 'document_dem' in data and data['document_dem']:
            file_data = data['document_dem']
            if ';base64,' in file_data:
                format, filestr = file_data.split(';base64,')
                ext = format.split('/')[-1]
                data['document_dem'] = ContentFile(
                    base64.b64decode(filestr),
                    name=f"{data.get('dem_filename', 'demand_doc')}.{ext}"
                )
        
        if 'document_resp' in data and data['document_resp']:
            file_data = data['document_resp']
            if ';base64,' in file_data:
                format, filestr = file_data.split(';base64,')
                ext = format.split('/')[-1]
                data['document_resp'] = ContentFile(
                    base64.b64decode(filestr),
                    name=f"{data.get('resp_filename', 'response_doc')}.{ext}"
                )
        
        serializer = DemandeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# programme ---------------#
class SeismicListView(APIView):
    def get(self, request):
        seismics = Seismic.objects.all()
        
        # Filter by perimeter if provided
        prm_name = request.query_params.get('prm', None)
        if prm_name:
            seismics = seismics.filter(prm__name=prm_name)
            
        serializer = SeismicSerializer(seismics, many=True)
        return Response(serializer.data)

class WellListView(APIView):
    def get(self, request):
        wells = Well.objects.all()
        
        # Filter by perimeter if provided
        prm_name = request.query_params.get('prm', None)
        if prm_name:
            wells = wells.filter(prm__name=prm_name)
            
        serializer = WellSerializer(wells, many=True)
        return Response(serializer.data)

class GgStudiesListView(APIView):
    def get(self, request):
        studies = GgStudies.objects.all()
        
        # Filter by perimeter if provided
        prm_name = request.query_params.get('prm', None)
        if prm_name:
            studies = studies.filter(prm__name=prm_name)
            
        serializer = GgStudiesSerializer(studies, many=True)
        return Response(serializer.data)

class FracturationListView(APIView):
    def get(self, request):
        fracturations = Fracturation.objects.all()
        
        # Filter by perimeter if provided
        prm_name = request.query_params.get('prm', None)
        if prm_name:
            fracturations = fracturations.filter(phase__ctr__prm__name=prm_name)
            
        serializer = FracturationSerializer(fracturations, many=True)
        return Response(serializer.data)

# Custom view for engagement details (Step 3 of Perimetres)
class EngagementDetailView(APIView):
    def get(self, request):
        prm_name = request.query_params.get('prm', None)
        phase_name = request.query_params.get('phase', None)
        
        if not prm_name or not phase_name:
            return Response({"error": "prm and phase parameters are required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            commitments = Commitement.objects.filter(phase__ctr__prm__name=prm_name, phase__name=phase_name)
            if not commitments.exists():
                return Response([], status=status.HTTP_200_OK)  # <-- CHANGED

            commitment = commitments.first()
            data = [
                {"label": "Acquisition Sismique 2D (KM)", "contractuel": commitment.s2d_acq, "restePhase": 0, "effectif": 0, "resteRealiser": commitment.s2d_acq},
                {"label": "Acquisition Sismique 3D (KM²)", "contractuel": commitment.s3d_acq, "restePhase": 0, "effectif": 0, "resteRealiser": commitment.s3d_acq},
                {"label": "Retraitement 2D", "contractuel": commitment.retraitement_2d, "restePhase": 0, "effectif": 0, "resteRealiser": commitment.retraitement_2d},
                {"label": "Retraitement 3D", "contractuel": commitment.retraitement_3d, "restePhase": 0, "effectif": 0, "resteRealiser": commitment.retraitement_3d},
                {"label": "Puits Wildcat", "contractuel": commitment.well_wc, "restePhase": 0, "effectif": 0, "resteRealiser": commitment.well_wc},
                {"label": "Puits Délinéation", "contractuel": commitment.well_d, "restePhase": 0, "effectif": 0, "resteRealiser": commitment.well_d},
                {"label": "Puits d’Appréciation", "contractuel": commitment.well_app, "restePhase": 0, "effectif": 0, "resteRealiser": commitment.well_app},
                {"label": "Tests", "contractuel": commitment.well_test, "restePhase": 0, "effectif": 0, "resteRealiser": commitment.well_test},
                {"label": "Études G&G", "contractuel": commitment.gg_studies, "restePhase": 0, "effectif": 0, "resteRealiser": commitment.gg_studies},
                {"label": "Acquisition Gravimétrie", "contractuel": commitment.gravimetry_acquisition, "restePhase": 0, "effectif": 0, "resteRealiser": commitment.gravimetry_acquisition},
                {"label": "Traitement Gravimétrie", "contractuel": commitment.gravimetry_treatment, "restePhase": 0, "effectif": 0, "resteRealiser": commitment.gravimetry_treatment},
            ]
            serializer = EngagementDetailSerializer(data, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# View for commitments (Step 2 of Perimetres)
class CommitementListView(APIView):
    def get(self, request):
        commitments = Commitement.objects.all()
        
        # Filter by perimeter if provided
        prm_name = request.query_params.get('prm', None)
        if prm_name:
            commitments = commitments.filter(phase__ctr__prm__name=prm_name)
            
        serializer = CommitementSerializer(commitments, many=True)
        return Response(serializer.data)