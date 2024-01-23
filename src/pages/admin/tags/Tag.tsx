import {} from 'react'
import { useTag } from '@/api/tags/read';
import { useParams } from 'react-router-dom'

const Tag = () => {
    const { id }   = useParams();

    const { data } = useTag({ id });

    


    return (
        <div>
            
        </div>
    )
}

export default Tag