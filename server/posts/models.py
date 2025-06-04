from django.db import models
from .base_models import BaseModel
# Create your models here.


class TopBar(BaseModel):
    title = models.CharField(max_length=100, null=True, blank=True)
    link = models.URLField(max_length=200, null=True, blank=True)

    class Meta:
        verbose_name = "TopBar"
        verbose_name_plural = "TopBars"
        db_table = 'top_bar'


class Posts(BaseModel):
    CATEGORIES = [
        ('results', 'Results'),
        ('admit_cards', 'Admit Cards'),
        ('latest_jobs', 'Latest Jobs'),
        ('answer_keys', 'Answer Keys'),
        ('syllabus', 'Syllabus'),
        ('admission', 'Admission'),
    ]
    title = models.CharField(max_length=100, null=True, blank=True)
    link = models.URLField(max_length=200, null=True, blank=True)
    category = models.CharField(
        choices=CATEGORIES, max_length=100, default='latest_jobs')

    class Meta:
        verbose_name = "Posts"
        verbose_name_plural = "Posts"
        db_table = 'posts'
