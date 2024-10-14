import Styles from "../Styles/Avatar.module.css"

export function Avatar({hasBorder = true, src}){
    return(
        <img
            className={hasBorder ? Styles.avatarWithBorder : Styles.avatar}
            src={src}
            alt=""
          />
    )
}