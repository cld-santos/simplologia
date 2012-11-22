package br.cld.simplologia;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;



public class CreateMapService{


	public String publish(String urlServer, String jsonServicePath, String tokenService) {
		//{"token":"rbYBhytKU6w-Wn-kbopN3YFKIXZBkggEHnBNMpAjOrdYV29zffrQB-WZI1IcnXB7","expires":1352986835832}

		String result="";
		String strUrl = new StringBuilder()
		.append("http://"+ urlServer +"/arcgis/admin/services/createService")
		.append("?token="+tokenService+"&f=pjson&service=").toString();

		URL url;
		try {
			String currentPath = new File(".").getCanonicalPath();

			File arquivo = new File(currentPath + jsonServicePath);
			if (!arquivo.exists()){
				return "error: " + currentPath + jsonServicePath;
			}

			String jsonRequest = readFileAsString(currentPath + jsonServicePath);
			
			strUrl += URLEncoder.encode(jsonRequest, "UTF-8");

			url = new URL(strUrl); 
			URLConnection conn = url.openConnection();
			conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
			conn.setRequestProperty("Accept", "text/plain");

			conn.setDoOutput(true);  

			OutputStreamWriter wr = new OutputStreamWriter(conn.getOutputStream());  
			wr.write(jsonRequest);  
			wr.flush();

			BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));  
			String line;  
			while ((line = rd.readLine()) != null) {  
				result += line; 
			}  
			wr.close();  
			rd.close();


		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return result;

	}

	private String readFileAsString(String filePath)
			throws java.io.IOException{
		StringBuffer fileData = new StringBuffer(1000);
		BufferedReader reader = new BufferedReader(
				new FileReader(filePath));
		char[] buf = new char[1024];
		int numRead=0;
		while((numRead=reader.read(buf)) != -1){
			String readData = String.valueOf(buf, 0, numRead);
			fileData.append(readData);
			buf = new char[1024];
		}
		reader.close();
		return fileData.toString();
	}
}