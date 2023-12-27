import { ChangeEvent, ReactNode, useState } from "react"
import { Backdrop, Btn, CategorySelect, Input, Upload } from "..";



const CategoryForm = ({ trigger, callback, initData={name: '', category: ''}, btnText="Create Category" } : { trigger: ReactNode, callback: any, initData?: Record<string, any>, btnText?: string }) => {

    const [ showForm, setShowForm ] = useState<boolean>(false);

    const [ formData, setFormData ] = useState<Record<string, any>>(initData);

    const handleCallback = () => {
        callback(formData).then( (result: boolean) => result ? setShowForm(false) : "" )
    }
        
    return (
        <>
            <div onClick={() => setShowForm(true)}  className="w-max h-max">
                {trigger}
            </div>

            <Backdrop stateObj={[ showForm, setShowForm ]}>
                <div className="min-h-[500px] w-[500px] max-[550px]:w-full scale-95 bg-white dark:bg-neutral-800 rounded-md shadow p-12">

                    <div className="mb-3 mx-auto h-[250px] w-[250px] border dark:border-neutral-600 pear-1 overflow-hidden">
                        <div className="h-full w-full flex-col flex-center">
                            <Upload.Image init={formData.image} onUpload={(image: FileList) => setFormData({ ...formData, image: image[0] }) } />
                        </div>
                    </div>

                    <div className="w-full form-control flex-col flex gap-1.5 ">
                        <label className="text-sm">Category Name</label>
                        <Input.Base value={formData.name} onChange={(event: ChangeEvent<HTMLInputElement> ) => setFormData({ ...formData, name: event.target.value })} extraClass="w-full" placeholder={'Type the "Category Name" here'} />
                    </div>

                    <div className="w-full form-control flex-col flex gap-1.5 mt-3">
                        <label className="text-sm">Parent Category</label>
                        <CategorySelect init={formData.category} onSelect={(category : {label: string, value: any}) => setFormData({ ...formData, parent: category.value })}/>
                    </div>

                    <Btn.Sm onClick={handleCallback} extraClass="w-full rounded-md mt-6">{btnText}</Btn.Sm>

                </div>
            </Backdrop>
        </>
    )
}

export default CategoryForm