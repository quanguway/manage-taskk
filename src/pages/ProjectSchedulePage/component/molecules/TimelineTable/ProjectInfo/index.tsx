import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import { HBox, VBox } from 'src/components/atoms/Boxes';
import { ProjectType } from 'src/pages/ProjectSchedulePage/services/types/scheduleTimeline';
import IconTag from 'src/assets/svg/IconTag';
import theme, { ThemeTypeMUI } from 'src/theme';
import { Rotate } from 'src/components/atoms/Animate';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


type ProjectInfoProps = ProjectType & {
  isOpen: boolean
}

const ProjectInfo = ({ project_name, client_name, project_avatar, tags, isOpen }: ProjectInfoProps) => {

  return (
    <ProjectInfoStyled theme={theme}>
      {/* Project info */}
      <HBox gap={2}>
        <Avatar alt={client_name} src={project_avatar} />
        <VBox gap={0.5}>
          <HBox gap={0.5}>
            <Typography>{project_name}</Typography>
            <Tooltip arrow placement='right' disableFocusListener disableTouchListener title={
              <HBox gap={1} >
                <Typography>Tags: </Typography>
                {tags.map((tag, index) => (
                  <Chip  key={index} label={tag}/>
                ))}
              </HBox>
            }>
              <IconButton>
                <IconTag/>
              </IconButton>
            </Tooltip>
          </HBox>
          <Typography>{client_name}</Typography>
        </VBox>
      </HBox>
      {/* Project tool */}
      <HBox className='tools'>
        <Box className='tool-item'>
          <IconButton>
            <Rotate isRotate={isOpen}>
              <KeyboardArrowRightIcon />
            </Rotate>
          </IconButton>
        </Box>
      </HBox>
    </ProjectInfoStyled>
  );
};

const ProjectInfoStyled = styled(HBox)<{theme: ThemeTypeMUI}>`
  border: 1px solid ${props => props.theme.taskk.colors.border.gray};
  display: flex;
  justify-content: space-between;
  padding: 8px;

  .tools {
    .tool-item {
      
    }
  }
`;

export default ProjectInfo;