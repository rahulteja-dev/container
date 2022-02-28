import {
	HeaderWrapper,
	Nav,
	Anchor,
	LogoWrapper,
	ImageWrapper,
	ActionsWrapper,
	Label,
} from './style'
import NameLogo from '../../Assets/name.png'
import Button from '../Button'
import { staticText } from '../../Constants/Static'

interface HeaderProps {
	label: string
}

const Header = ({ label }: HeaderProps) => {
	return (
		<HeaderWrapper>
			<Nav>
				<LogoWrapper>
					<Anchor>
						<ImageWrapper src={NameLogo} alt={staticText.NAME_LOGO_ALT} />
					</Anchor>
					<Label>{label}</Label>
				</LogoWrapper>
				<ActionsWrapper>
					<Button>{staticText.RESUME}</Button>
				</ActionsWrapper>
			</Nav>
		</HeaderWrapper>
	)
}

export default Header
