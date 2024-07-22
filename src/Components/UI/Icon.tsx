
interface Props{
    label: string,
    size?: string,
    color?: string
}

const Icon: React.FC<Props> = ({label, size="text-xl", color}) => {
  return (
      <>
          <div>
          <span className={`material-symbols-outlined ${size} ${color}`}>
{label}
</span>
      </div>
      </>
  )
}

export default Icon