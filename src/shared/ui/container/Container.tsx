import React from 'react'
import styles from "./Container.module.css"
import { IContainerProps } from '../../types/types'

export const Container: React.FC<IContainerProps> = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}
