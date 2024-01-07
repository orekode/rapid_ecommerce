import { Card, Scroll } from '..'
import { useCategories } from '@/api/categories/read'
import { useNavigate } from 'react-router-dom';

const CategoryScroll = () => {
    const { data } = useCategories({ page: 1 });
    const result = data?.data;
    const navigate = useNavigate();


  return (
    <Scroll.TopBtns title={"Popular Categories"}>
        {!result && Array.from({length: 10}, (_, index) => 
            <Card.PearLoading key={index} />
        )}

        {result && result.map( ({image, category, id } : {image: string, category: string, id: string | number }, index: number) => 
            <div key={index} className="scale">
                <Card.Pear image={image} title={category} onClick={() => navigate('/admin/category/' + id)}  />
            </div>
        )}
    </Scroll.TopBtns>
  )
}

export default CategoryScroll