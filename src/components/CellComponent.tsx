import {Cell} from '../models/Cell';
import {FC} from "react";
import {findAllByDisplayValue} from "@testing-library/react";

interface CellProps {
    cell: Cell
}

const CellComponent: FC<CellProps> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join(' ')}
        >
            {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}

        </div>

    );
};

export default CellComponent;
