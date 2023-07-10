from django.views.generic import ListView, DetailView
from .models import Album, Song

class AlbumListView(ListView):
    model = Album
    template_name = 'app1/album_list.html' 

class AlbumDetailView(DetailView):
    model = Album
    template_name = 'app1/album_detail.html' 


from django.views.generic import ListView, DetailView, CreateView
from .models import Album, Song
from .forms import AlbumForm, SongForm

# Tus vistas anteriores aquí...

class AlbumCreateView(CreateView):
    model = Album
    form_class = AlbumForm
    template_name = 'app1/album_form.html' 

class SongCreateView(CreateView):
    model = Song
    form_class = SongForm
    template_name = 'app1/song_form.html'


from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = 'principal/home.html'
