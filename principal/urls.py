from django.contrib import admin
from django.urls import include, path
from .views import HomeView

urlpatterns = [
    path("", HomeView.as_view(), name="home"),
    path("app1/", include("app1.urls")),
    path("admin/", admin.site.urls),
]
