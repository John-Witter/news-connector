import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadSavedArticles } from '../../store/saved'
import RemoveFromSaved from './RemoveFromSaved'
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

    if (!user) {
        return null
    }

    return (
        <div className='saved'>
            <p className='savedText'>Saved</p>
            {savedArticles && Object.values(savedArticles).map(item => {
                return (
                    <div key={item.id} className='content-container'>
                        <h2>
                            <a href={item.itemURL} className='savedTitle'>{item.title}
                            </a>
                            <a href={item.itemURL} className='savedSource'>{item.contentSource} {item.publishedTime}
                            </a>
                        </h2>
                        <a href={item.itemURL} className='savedImage'>
                            <img src={item.imageURL} alt={item.title} className='savedImage' />
                        </a>
                        {item.description && (<div className='description'>{item.description}</div>)}
                        <RemoveFromSaved item={item}/>
                    </div>
                )
            })}
        </div>
    )
}

export default SavedList
