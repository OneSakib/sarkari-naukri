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


class SarkariJobPost(models.Model):
    post_title = models.CharField(max_length=255)
    post_date = models.DateTimeField()
    short_info = models.TextField()

    # Organization Info
    organization_name = models.CharField(
        max_length=255, default="Uttar Pradesh Subordinate Service Selection Commission (UPSSSC)")
    exam_name = models.CharField(
        max_length=255, default="UPSSSC Preliminary Examination Test (PET) 2025")
    advt_no = models.CharField(max_length=100, default="01-Exam/2025")

    # Important Dates
    application_start_date = models.DateField()
    registration_last_date = models.DateField()
    fee_payment_last_date = models.DateField()
    correction_last_date = models.DateField(null=True, blank=True)
    exam_date = models.CharField(max_length=255, default="As per Schedule")
    admit_card_date = models.CharField(max_length=255, default="Before Exam")

    # Application Fees
    fee_general_obc = models.DecimalField(max_digits=6, decimal_places=2)
    fee_sc_st = models.DecimalField(max_digits=6, decimal_places=2)
    fee_ph = models.DecimalField(max_digits=6, decimal_places=2)
    fee_payment_mode = models.CharField(
        max_length=255, default="SBI I Collect / E Challan")

    # Age Limit
    age_limit_date = models.DateField(null=True)
    min_age = models.PositiveIntegerField(default=18)
    max_age = models.PositiveIntegerField(default=40)
    age_relaxation = models.TextField(
        default="As per UPSSSC PET Exam Recruitment Rules")

    # Eligibility
    eligibility = models.TextField(
        default="Minimum Class 10 High School Exam in Any Recognized Board OR Any Higher Qualification in Any Recognized University in India.")

    # Instructions
    instructions = models.TextField()

    # External Links
    apply_online_link = models.URLField()
    notification_link = models.URLField()
    syllabus_link = models.URLField()
    official_website = models.URLField()

    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.post_title

    class Meta:
        verbose_name = "Sarkari Job Post"
        verbose_name_plural = "Sarkari Job Post"
        db_table = 'sarkari_job_post'


class Posts(BaseModel):
    CATEGORIES = [
        ('results', 'Results'),
        ('admit_cards', 'Admit Cards'),
        ('latest_jobs', 'Latest Jobs'),
        ('answer_keys', 'Answer Keys'),
        ('syllabus', 'Syllabus'),
        ('admission', 'Admission'),
        ('certificate_verification', 'Certificate Verification'),
        ('importants', 'Importants'),
    ]
    title = models.CharField(max_length=100, null=True, blank=True)
    link = models.URLField(max_length=200, null=True, blank=True)
    category = models.CharField(
        choices=CATEGORIES, max_length=100, default='latest_jobs')

    class Meta:
        verbose_name = "Posts"
        verbose_name_plural = "Posts"
        db_table = 'posts'
