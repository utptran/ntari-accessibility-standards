import { useState } from "react";
import styled from "styled-components";
/**
 * Practice use of ARIA live, relevant, and live regions on a button click.
 */

const WrapperError = styled.div.attrs({
    'aria-relevant': 'text',
    role: 'alert',
})<{ $visible: boolean }>`
    display: ${(props) => (props.$visible ? 'block' : 'none')};
    border: red;
    color: red;
    text-align: center;
`;

function ErrorMSG({ visible }: { visible: boolean }) {
    return(
        <WrapperError $visible={visible}>
            This is a sample error message.
        </WrapperError>
    );
}

const Button = styled.button``;
/** What the error message and button sits in. So, builds an accessibility tree with live region. */
const Wrapper = styled.div.attrs({
})`
    display: flex;
    place-content: center;
`;

export default function Practice() {
    const [isClicked, setIsClicked] = useState(false);

    return(
        <Wrapper>
            <Button onClick={() => setIsClicked((prev) => !prev)}>
                Click here for error read.
            </Button>
            <ErrorMSG visible={isClicked} />
        </Wrapper>
    );
}