import React from 'react'

export default function PracticalExperience ({ practicalExperience }) {
    return(
        <div className='practicalExperience'>
            {
                practicalExperience.map(experience => {
                    return(
                        <div className='experiences' key={experience.id}>
                            <h1 className='experienceTitle previewTitle'>Experience</h1>
                            <div className='experienceDetails'>
                                <p className='position experiencePreview'>{experience.position}</p>
                                <p className='company experiencePreview'>{experience.company}</p>
                                <p className='description experiencePreview'>{experience.description}</p>
                                <p className='experienceFrom experiencePreview'>{experience.from}</p>
                                <p className='experienceTo experiencePreview'>{experience.to}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}