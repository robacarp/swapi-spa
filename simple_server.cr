require "kemal"

static_headers do |response, filepath, filestat|
  if filepath =~ /\.html$/
    response.headers.add("Access-Control-Allow-Origin", "*")
  end
  response.headers.add("Content-Size", filestat.size.to_s)
end

# MIME.register ".js", "application/javascript"


get "/" do |env|
  env.redirect "index.html"
end

Kemal.run
