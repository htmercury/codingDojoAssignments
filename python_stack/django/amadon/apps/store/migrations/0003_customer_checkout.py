# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2018-07-16 02:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_auto_20180715_2051'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='checkout',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
            preserve_default=False,
        ),
    ]