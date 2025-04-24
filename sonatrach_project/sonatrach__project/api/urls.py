from django.urls import path
from .views import ConcessionListView, PhaseListView, ContractListView, DemandeListView, DemandeCreateView, SeismicListView, WellListView, GgStudiesListView, FracturationListView, CommitementListView, EngagementDetailView

urlpatterns = [
    path('concessions/', ConcessionListView.as_view(), name='concession-list'),
    path('phases/', PhaseListView.as_view(), name='phase-list'),
    path('contracts/', ContractListView.as_view(), name='contract-list'),
    path('demandes/', DemandeListView.as_view(), name='demande-list'),
    path('demandes/create/', DemandeCreateView.as_view(), name='demande-create'),

    # programme ---------------#
    path('sismiques/', SeismicListView.as_view(), name='seismic-list'),
    path('puits/', WellListView.as_view(), name='well-list'),
    path('etudes/', GgStudiesListView.as_view(), name='ggstudies-list'),
    path('fracturation/', FracturationListView.as_view(), name='fracturation-list'),


        # Engagements for Perimetres page
    path('commitments/', CommitementListView.as_view(), name='commitment-list'),
    path('commitments/details/', EngagementDetailView.as_view(), name='engagement-details'),
]