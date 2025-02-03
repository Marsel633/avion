import React from 'react'
import { AboutBrandItem } from '../../entities/aboutBrandItem/AboutBrandItem'
import { AboutBrandItems } from '../../../public/arrays'
import styles from "./AboutBrand.module.css"

export const AboutBrand: React.FC = () => {
  return (
    <div className={styles.aboutBrandItems}>
        {AboutBrandItems.map(({id, title, description, icon}) => (
        <AboutBrandItem id={id} title={title} description={description} icon={icon} />
        ))}
    </div>
  )
}
