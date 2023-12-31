import classes from './ButtonCard.module.css'

const ButtonCard = (props: any) => {
   return (
     <button className={`${classes.btnCard} ${props.className}`} type={props.type} onClick={props.onClick}>
       {props.children}
     </button>
   );
}

export default ButtonCard