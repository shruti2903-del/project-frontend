import LoggedInUserNavbar from '../../components/LoggedInUserNavbar';
import HomePage from '../HomePage';
import Navbar from '../../components/Navbar';

export default function UserHome() {
    // const navigate = useNavigate()
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     const role = localStorage.getItem('role');
    //     if (token && role === 'vendor') {
    //         navigate('/VendorHome')
    //     }
    //     else if (!token) {
    //         navigate('/login')
    //     }
    // }, [])



    return (
        <div className='m-0 p-0'>
            

            <HomePage />
            
        </div>
    )
}

