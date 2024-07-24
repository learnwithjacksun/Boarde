import { Navigate} from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthProvider';

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
