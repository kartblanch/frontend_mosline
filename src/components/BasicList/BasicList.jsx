import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styles from './BasicList.module.scss'

export const BasicList = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <Box className={styles.root}>
            <nav aria-label="secondary mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText
                                primary="Trash"
                                onClick={(event) => handleListItemClick(event, 0)}
                                className={styles.list_item__selected}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Trash2"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
};
