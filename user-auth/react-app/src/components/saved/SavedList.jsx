import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { loadSavedArticles } from '../../store/saved'

const SavedList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadSavedArticles())
    }, [dispatch])

    return (
        <div className='saved'>
            <p>Saved</p>
        </div>
    )
}

export default SavedList
