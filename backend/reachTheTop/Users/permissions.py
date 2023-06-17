from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsOwnerOrReadOnly(BasePermission):

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
            
        if not request.user.is_authenticated:
            return False

        user_id = view.kwargs.get('user_id')
        return user_id == request.user.id