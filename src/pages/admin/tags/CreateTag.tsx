import { Btn, Input, Upload } from "@/components"
import { ChangeEvent, useState } from "react"


const CreateTag = () => {
    const [ formData, setFormData ] = useState<Record<string,any>>({});
    const [ errors, setErrors ] = useState<Record<string,any>>({});
    
  return (
    <div>
        <div className="h-[300px] w-full overflow-hidden rounded-md dark:bg-[#111] bg-gray-50 mt-3">
            <Upload.Image />
        </div>

        <div className="my-3 flex flex-col gap-1">
            <label htmlFor="name">Tag Name</label>
            <Input.Base extraClass="w-full" />
        </div>

        <div className="">
        <div className="grid grid-cols-6 max-[650px]:grid-cols-3 gap-6">
          <div className="col-span-3">
            <div className="w-full form-control flex-col flex gap-1.5 ">
              <label className="text-sm">Discount Type</label>
              <Input.NativeSelect onChange={(event: ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, discount_type: event.target.value })}>
                <option value="percentage">Percentage (%)</option>
                <option value="fixed price">Fixed Price</option>
              </Input.NativeSelect>
              <div className="text-xs text-red-400">{errors?.discount_type}</div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="w-full form-control flex-col flex gap-1.5 ">
              <label className="text-sm">Discount Value</label>
              <Input.Base value={formData.discount_value} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, discount_value: event.target.value })} extraClass="w-full text-lg" placeholder={'e.g 10'} />
              <div className="text-xs text-red-400">{errors?.discount_value}</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full mt-6 ">
        <Btn.Sm onClick={() => {}} extraClass="w-full rounded-md ">Create Tag</Btn.Sm>
      </div>

    </div>
  )
}

export default CreateTag