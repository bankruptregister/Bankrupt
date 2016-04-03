# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
#
# Also note: You'll have to insert the output of 'django-admin sqlcustom [app_label]'
# into your database.
from __future__ import unicode_literals

from django.db import models


class Act(models.Model):
    id = models.AutoField(primary_key=True,unique=True) # Field name made lowercase.
    startdate = models.DateField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    finishdate = models.DateField(db_column='FinishDate', blank=True, null=True)  # Field name made lowercase.
    notes = models.TextField(db_column='Notes', blank=True, null=True)  # Field name made lowercase.
    judgeid = models.ForeignKey('Judge', db_column='JudgeId')  # Field name made lowercase.
    comissionerid = models.ForeignKey('Comissioner', db_column='ComissionerId')  # Field name made lowercase.
    courtid = models.ForeignKey('Court', db_column='CourtId')  # Field name made lowercase.
    debterid = models.ForeignKey('Debter', db_column='DebterId')  # Field name made lowercase.
    archive = models.BooleanField(db_column="Archive",default=False)

class Comissioner(models.Model):
    id = models.AutoField(primary_key=True,unique=True)  # Field name made lowercase.
    powertype = models.CharField(db_column='PowerType', max_length=45, blank=True, null=True)  # Field name made lowercase.
    certificatenumber = models.CharField(db_column='CertificateNumber', max_length=45, blank=True, null=True)  # Field name made lowercase.
    setdate = models.DateField(db_column='SetDate', blank=True, null=True)  # Field name made lowercase.
    notes = models.CharField(db_column='Notes', max_length=45, blank=True, null=True)  # Field name made lowercase.
    archive = models.BooleanField(db_column="Archive",default=False)

class Court(models.Model):
    id = models.AutoField(primary_key=True,unique=True)  # Field name made lowercase.
    number = models.CharField(db_column='Number', max_length=45, blank=True, null=True)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=100, blank=True, null=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=45, blank=True, null=True)  # Field name made lowercase.
    archive = models.BooleanField(db_column="Archive",default=False)

class Debter(models.Model):
    id = models.AutoField(primary_key=True,unique=True)  # Field name made lowercase.
    type = models.IntegerField(db_column='Type', blank=True, null=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=45, blank=True, null=True)  # Field name made lowercase.
    number = models.CharField(db_column='Number', max_length=45, blank=True, null=True)  # Field name made lowercase.
    kved = models.CharField(db_column='KVED', max_length=45, blank=True, null=True)  # Field name made lowercase.
    statepart = models.CharField(db_column='StatePart', max_length=45, blank=True, null=True)  # Field name made lowercase.
    actname = models.CharField(db_column='ActName', max_length=45, blank=True, null=True)  # Field name made lowercase.
    notes = models.TextField(db_column='Notes', blank=True, null=True)  # Field name made lowercase.
    archive = models.BooleanField(db_column="Archive",default=False)


class Judge(models.Model):
    id = models.AutoField(primary_key=True,unique=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=45, blank=True, null=True)  # Field name made lowercase.
    surname = models.CharField(db_column='Surname', max_length=45, blank=True, null=True)  # Field name made lowercase.
    middlename = models.CharField(db_column='MiddleName', max_length=45, blank=True, null=True)  # Field name made lowercase.
    archive = models.BooleanField(db_column="Archive",default=False)

