from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Task
from .serializers import TaskSerializer
from rest_framework import viewsets
# # Create your views here.

# @api_view(['GET'])
# def get_tasks(request):
#     tasks = Task.objects.all()
#     serializer = TaskSerializer(tasks, many=True)
#     return Response(serializer.data)


# @api_view(['POST'])
# def add_tasks(request):
#     serializer = TaskSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=201)
#     return Response(serializer.errors, status=400)


# @api_view(['DELETE'])
# def delete_tasks(request, task_id):
#     task = Task.objects.filter(id = task_id)
#     task.delete()
#     return Response({"message" : "Task Deleted"}, status=201)

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer