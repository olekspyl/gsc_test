import rightSide from '../../../assets/icons/right-side-grey.svg'
import leftSide from '../../../assets/icons/left-side-grey.svg'
import download from '../../../assets/icons/download.svg'

const ButtonDownload = () => {
    return (<>
        <button type='button' className='flex bg-grey relative mb-3 md:mb-0 h-10 items-center '>
            <a href="/" className='flex px-1 items-center' download>
                <img src={leftSide} alt="lef-side" className='absolute -left-13 bottom-0 '/>
                <img src={download} alt="download" className='flex ' />
                <p className=' flex text-base font-medium text-light uppercase ml-2.5 font-oswald'>download</p>
                <img src={rightSide} alt="right-side" className='absolute left-112 bottom-0 '/>
              </a>
            </button>
  </>
    
  )
}

export default ButtonDownload;
