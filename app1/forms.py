from django import forms
from .models import Album, Song

class AlbumForm(forms.ModelForm):
    class Meta:
        model = Album
        fields = ['title', 'artist', 'cover_image']

class SongForm(forms.ModelForm):
    class Meta:
        model = Song
        fields = ['title', 'audio_file']
