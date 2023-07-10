from django.urls import path
from .views import AlbumListView, AlbumDetailView, AlbumCreateView, SongCreateView

urlpatterns = [
    path("", AlbumListView.as_view(), name="album_list"),
    path("album/<int:pk>/", AlbumDetailView.as_view(), name="album_detail"),
    path("album/new/", AlbumCreateView.as_view(), name="album_create"),
    path("song/new/", SongCreateView.as_view(), name="song_create"),
]
