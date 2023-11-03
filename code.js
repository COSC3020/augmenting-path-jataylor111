function augmentingPath(graph, start, end) {
    ar queue = [start];
    var paths = {start: null};
    var visited = new Set();

    while (queue.length > 0) {
        var node = queue.shift();

        if (node == end) {
            var path = [];
            while (node != null) {
                path.unshift(node);
                node = paths[node];
            }
            return path;
        }

        for (var neighbor in graph[node]) {
            if (!paths.hasOwnProperty(neighbor) && !visited.has(neighbor)) {
                queue.push(neighbor);
                paths[neighbor] = node;
            }
        }
        visited.add(node);
    }
    return [];
}
