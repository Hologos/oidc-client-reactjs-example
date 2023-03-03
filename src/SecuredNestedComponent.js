import jwtDecode from 'jwt-decode'
import { useAuth } from 'react-oauth2-pkce'

function SecuredNestedComponent() {
    const { authService } = useAuth();
    const jwtPayload = jwtDecode(authService.getAuthTokens().access_token);
    const roles = jwtPayload.groups || [];
    return (
        <div>
            <button onClick={logout}>Logout</button>
            {roles.includes('admin') && <AdminView />}
            <UserView />
        </div>
    );
}

export default SecuredNestedComponent;
