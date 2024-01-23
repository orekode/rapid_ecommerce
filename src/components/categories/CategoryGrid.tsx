
import { Card, Empty } from '..'
import { useNavigate } from 'react-router-dom';

const CategoryGrid = ({ data } : { data: Array<Record<string, any>> | undefined }) => {

    const navigate = useNavigate();


    return (
        <>
            <div className=" grid-box-200 min-[800px]:[&>*]:scale-90 max-[500px]:grid-cols-2 gap-3 py-6 ">
                {!data && Array.from({length: 10}, (_, index) => 
                    <div key={index} className="scale">
                        <Card.PearLoading />
                    </div>
                )}

                {data && data.map( ({image, category, id }, index: number) => 
                    <div key={index} className="scale">
                        <Card.Pear image={image} title={category} onClick={() => navigate('/admin/category/' + id)}  />
                    </div>
                )}
            </div>

            <Empty load={data && data.length <= 0} />
        </>
    )
}

export default CategoryGrid