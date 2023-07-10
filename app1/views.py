from django.views.generic import ListView, DetailView, CreateView, TemplateView
from .models import Album, Song
from .forms import AlbumForm, SongForm

class AlbumListView(ListView):
    model = Album
    template_name = 'album_list.html' 

class AlbumDetailView(DetailView):
    model = Album
    template_name = 'album_detail.html' 

class AlbumCreateView(CreateView):
    model = Album
    form_class = AlbumForm
    template_name = 'album_form.html' 

class SongCreateView(CreateView):
    model = Song
    form_class = SongForm
    template_name = 'song_form.html'

class HomeView(TemplateView):
    template_name = 'home.html'
