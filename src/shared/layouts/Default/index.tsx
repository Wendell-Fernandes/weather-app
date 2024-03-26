import React from 'react'

import { IChildren } from '../../types'
import { Container, Paper } from './styles'

const Default: React.FC<IChildren> = ({ children }) => {
	return (
		<Container>
			<Paper square elevation={2} color="paper">
				{children}
			</Paper>
		</Container>
	)
}

export default Default
