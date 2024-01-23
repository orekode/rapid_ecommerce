import { useSubCategories } from '@/api/categories/read'
import { CategoryGrid, Search } from '..';
import { useState } from 'react';

const SubCategories = ({ id } : { id: string | number }) => {

  const [ search, setSearch ] = useState<string>("");


  const { data } = useSubCategories({ id, search });

  const result = data?.data;

  

  return (
    <div>
      <Search.Lg callback={setSearch} />
      <CategoryGrid data={result} />
    </div>
  )
}

export default SubCategories