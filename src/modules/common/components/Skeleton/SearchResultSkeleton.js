import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function SearchResultSkeleton() {
    return (
        <Box sx={{ width: 280 }}>
            <Box sx={{ mb: 0.3 }}>
                <Skeleton width={80} height={25} />
                <Skeleton width={180} height={18} />
            </Box>

            <Box sx={{ mb: 0.3 }}>
                <Skeleton width={80} height={25} />
                <Skeleton width={180} height={18} />
            </Box>

            <Box sx={{ mb: 0.3 }}>
                <Skeleton width={80} height={25} />
                <Skeleton width={180} height={18} />
            </Box>
        </Box>
    );
}
