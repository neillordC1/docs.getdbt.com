import React from 'react'
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const SpotlightWrapper = ({ isSpotlightMember, children }) => {
  return isSpotlightMember ? (
    <header className={styles.spotlightMemberCard}>
      {children}
    </header>
  ) : (
    <div className={styles.spotlightMemberCard}>
      {children}
    </div>
  )
} 

export const CommunitySpotlightCard = ({ frontMatter, isSpotlightMember = false }) => {
  const { id, title, description, image, jobTitle, companyName, socialLinks } = frontMatter

  console.log('id', id)
  return (  
    <SpotlightWrapper isSpotlightMember={isSpotlightMember}>
      {image && (
        <div className={styles.spotlightMemberImgContainer}>
          <img 
            src={image} 
            alt={title} 
          />
        </div>
      )}
      <div className={styles.spotlightMemberContent}>
        <h1 className={styles.spotlightMemberHeader}>{title}</h1>
        {(jobTitle || companyName) && (
          <div className={styles.spotlightMemberInfo}>
            <span>
              {jobTitle && jobTitle}
              {jobTitle && companyName && ', '}
              {companyName && companyName}
            </span>
          </div>
        )}
        {description && !isSpotlightMember && (
          <p className={styles.spotlightMemberDescription}>{description}</p>
        )}
        {socialLinks && isSpotlightMember && socialLinks?.length > 0 && (
          <div className={styles.spotlightMemberSocial}>
            {socialLinks.map((item, i) => (
              <>
                {item?.name && item?.link && (
                  <>
                    {i !== 0 && ' | '}
                    <a href={item.link} title="#">{item.name}</a>
                  </>
                )}
              </>
            ))}
          </div>
        )}
        {id && !isSpotlightMember && (
          <Link 
            to={`/community/spotlight/${id}`} 
            className={styles.spotlightReadMore}
          >Read More</Link>
        )}
      </div>
    </SpotlightWrapper>
  )
}
