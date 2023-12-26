import { Btn } from '@/components'
import { Outlet, useNavigate } from 'react-router-dom'

const LayoutThree = () => {

  const navigate = useNavigate();

  return (
    <div>
        <Btn.Xs onClick={() => navigate(-1)}>Back</Btn.Xs>
        <Outlet />
    </div>
  )
}

export default LayoutThree