import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadSavedArticles } from '../../store/saved'

const SavedList = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        if(!user) return 
        dispatch(loadSavedArticles())
    }, [dispatch])

    if (!user) {
        return null
    }

    return (
        <div className='saved'>
            <p>Saved</p>
        </div>
    )
}

export default SavedList
