import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadSavedArticles } from '../../store/saved'
import '../content.css'
import '../articles/articles.css'

const SavedList = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const savedArticles = useSelector(state => state.saved)

    useEffect(() => {
        if(!user) return 
        dispatch(loadSavedArticles())
    }, [dispatch])

    console.log('savedArticles:', savedArticles)

    if (!user) {
        return null
    }

    return (
        <div className='saved'>
            <p className='savedText'>Saved</p>
            {savedArticles && Object.values(savedArticles).map(item => {
                return (
                    <div key={item.id} className='content-container'>
                        <h2><a href={item.itemURL}>{item.title}</a></h2>
                        <a href={item.itemURL}>
                            <img src={item.imageURL} alt={item.title} />
                        </a>
                        {item.description && (<div className='description'>{item.description}</div>)}
                    </div>
                )
            })}
        </div>
    )
}

export default SavedList
