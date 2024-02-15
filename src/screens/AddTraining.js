import React, { useState ,useEffect} from "react";
import Header from "../components/Header"
import './AddTraining.css'
import { useDispatch,useSelector } from "react-redux"
import { addtraining } from "../actions/trainingActions"


const AddTraining = (props) => {

    const [freelancerId,setFreelancerId]=useState('')
    const [trainingName, setName] = useState('')
    const [trainingCategory, setCategory] = useState('')
    const [trainingPrice, setPrice] = useState('')
    const [trainingStartTime, setStartTime] = useState('')
    const [trainingEndTime, setEndTime] = useState('')
    const [trainingDuration, setDuration] = useState('')
    const [trainingDescription, setDescription] = useState('')
   
    const dispatch = useDispatch()
    const addTraining = useSelector(store => store.addTrainingNotes)
    const { loading, response, error } = addTraining


    useEffect(() => { 
        
        if (response && response.status =='success') {
            props.history.push('/home'); // Use './' for relative path
           
        } else if (error) {
            alert('error while making api call')
        }
    }, [loading, response, error])
    

    const onAdd = ()=>{
        dispatch(addtraining(freelancerId,
            trainingName,
            trainingCategory,
            trainingPrice,
            trainingStartTime,
            trainingEndTime,
            trainingDuration,
            trainingDescription))
    }

    return (
        <div>
            <Header title='Add Training' />
            <div className='form'>
                <div className="addtrainingform">
               

                <div className='mb-3'>
                        <label className='form-label'>Freelancer Id</label>
                        <input onChange={(e) => { setFreelancerId(e.target.value) }} type="text" className='form-control' placeholder="Enter freelancer id" />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Name</label>
                        <input onChange={(e) => { setName(e.target.value) }} type="text" className='form-control' placeholder="Enter training name" />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Category</label>
                        <input onChange={(e) => { setCategory(e.target.value) }} type="text" className='form-control' placeholder="Enter training category" />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Price</label>
                        <input onChange={(e) => { setPrice(e.target.value) }} type="text" className='form-control' placeholder="Enter training price" />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Start Time</label>
                        <input onChange={(e) => { setStartTime(e.target.value) }} type="text" className='form-control' placeholder="Set training start time" />
                    </div>


                    <div className='mb-3'>
                        <label className='form-label'>End Time</label>
                        <input onChange={(e) => { setEndTime(e.target.value) }} type="text" className='form-control' placeholder="Set training end time" />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Duration</label>
                        <input onChange={(e) => { setDuration(e.target.value) }} type="text" className='form-control' placeholder="Enter training duration" />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Description</label>
                        <textarea onChange={(e) => { setDescription(e.target.value) }} className='form-control'rows="4"></textarea> 
                    </div>

                    <div className='mb-3'>
                        <button  onClick={onAdd} className="btn btn-success">Add Training</button>
                        <button className="btn btn-danger float-end">cancel</button>
                    </div>

                </div>
            </div>

            {loading && <div> waiting for response</div> }

        </div>
    )
}

export default AddTraining