
from django.contrib import admin
from django.urls import path,include,re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include('accounts.urls')),
    path('', include('frontend.urls')),
    path('api/', include('api.urls')),
    # Catch-all for SPA routes:
    re_path(r'^(?!admin|api|index).*$', TemplateView.as_view(template_name="frontend/index.html")),
    
]
