# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-07 11:10
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0008_alter_user_username_max_length'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('ipmonitor', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ServerDetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('machine_type', models.IntegerField(choices=[(1, 'ESXI'), (2, 'AWV Server')], default=1)),
                ('operating_system', models.IntegerField(choices=[(1, 'ESXI'), (2, 'MSL')], default=1)),
                ('v4_ip', models.GenericIPAddressField(protocol='ipv4')),
                ('fqdn', models.CharField(max_length=100)),
                ('ram', models.IntegerField(blank=True, default=0, null=True)),
                ('location', models.CharField(blank=True, max_length=100, null=True)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('updated_date', models.DateTimeField(auto_now=True)),
                ('isactive', models.BooleanField(default=True)),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='server_creator', to=settings.AUTH_USER_MODEL)),
                ('owner_person', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='server_owner', to=settings.AUTH_USER_MODEL)),
                ('owner_team', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='auth.Group')),
                ('updated_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='server_updator', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]