<!DOCTYPE html>
<html>
<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<title>test viewer</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="viewer">
		<style type="text/css">
			body {		margin: 0;			}
			h4   {		margin: 10px;			}
			#aspect {
				display: inline-block;
				position: relative;
				width: 100%;
				max-width: 500px;
			}
			#dummy {
				padding-top: 100%;
			}
			#canvas-container {
				position: absolute;
				top: 0;
				width: 100%;
				height: 100%;
			}
			canvas {
				background-color: black;
			}
		</style>
	</head>
	<body>
		
		<h4>glsl viewer test (click and drag!)</h4>
		
		<div id="aspect">
			<div id="dummy"></div>
			<div id="canvas-container" style="-webkit-user-select: none;"><canvas width="500" height="500" style="position: absolute; left: 0px; top: 0px; width: 500px; height: 500px;"></canvas></div>
		</div>
		
		<!-- exported output from previous creation -->
		<script id="viewData" type="text/plain">
			
		</script>

	<script src="./viewers/viewbundle.js"></script>
</body>
</html>