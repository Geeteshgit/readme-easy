import React from 'react'

interface ReadmeContainerProps {
    readme: string,
    setReadme: (val: string) => void,
}

const ReadmeContainer:React.FC<ReadmeContainerProps> = ({ readme, setReadme }) => {
  return (
    <div>
        <pre>{readme}</pre>
    </div>
  )
}

export default ReadmeContainer