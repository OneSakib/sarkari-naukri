from django.db import models
from .base_models import BaseModel
# Create your models here.


class TopBar(BaseModel):
    title_1 = models.CharField(max_length=100, null=True, blank=True)
    link_1 = models.URLField(max_length=200, null=True, blank=True)
    title_2 = models.CharField(max_length=100, null=True, blank=True)
    link_2 = models.URLField(max_length=200, null=True, blank=True)
    title_3 = models.CharField(max_length=100, null=True, blank=True)
    link_3 = models.URLField(max_length=200, null=True, blank=True)
    title_4 = models.CharField(max_length=100, null=True, blank=True)
    link_4 = models.URLField(max_length=200, null=True, blank=True)
    title_5 = models.CharField(max_length=100, null=True, blank=True)
    link_5 = models.URLField(max_length=200, null=True, blank=True)
    title_6 = models.CharField(max_length=100, null=True, blank=True)
    link_6 = models.URLField(max_length=200, null=True, blank=True)
    title_7 = models.CharField(max_length=100, null=True, blank=True)
    link_7 = models.URLField(max_length=200, null=True, blank=True)
    title_8 = models.CharField(max_length=100, null=True, blank=True)
    link_8 = models.URLField(max_length=200, null=True, blank=True)

    class Meta:
        verbose_name = "TopBar"
        verbose_name_plural = "TopBars"
        db_table = 'top_bar'
