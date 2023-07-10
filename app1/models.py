from django.db import models

class Album(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    cover_image = models.ImageField(upload_to='albums/images/', default='albums/images/default.png')

    def __str__(self):
        return self.title

class Song(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    audio_file = models.FileField(upload_to='songs/audio/', default='')

    def __str__(self):
        return self.title
