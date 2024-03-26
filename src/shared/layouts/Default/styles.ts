import styled from '@emotion/styled'
import { Box, Paper as BasePaper } from '@mui/material'

export const Container = styled(Box)`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Paper = styled(BasePaper)`
	width: 320px;
	height: 680px;
	background: linear-gradient(0deg, #2c2d35 0%, #484b5b 100%);
	overflow-y: scroll;

	::-webkit-scrollbar {
		display: none;
	}
`
