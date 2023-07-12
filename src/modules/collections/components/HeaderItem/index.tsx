import { INFO_SVG, SORTING_SVG } from '@/common/constants'
import If from '@/src/common/components/If'
import Image from 'next/image'

interface HeaderItemProps {
    title: string
    sort?: boolean
    info?: boolean
    width?: string
}

const HeaderItem = ({ title, sort, info, width }: HeaderItemProps) => {
    return (
        <div
            className={`pl-2.5 py-2 flex items-center text-gray-500 text-xs font-medium text-center cursor-pointer border-b border-b-slate-200`}
            style={{ width: width }}
        >
            <div className="mr-1.5 flex items-center">{title}</div>
            <If
                condition={sort}
                then={
                    <Image
                        src={SORTING_SVG}
                        alt="sort_svg"
                        width={16}
                        height={16}
                    />
                }
            />
            <If
                condition={info}
                then={
                    <Image
                        src={INFO_SVG}
                        alt="bitcoin"
                        width={16}
                        height={16}
                    />
                }
            />
        </div>
    )
}

export default HeaderItem